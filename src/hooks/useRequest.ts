import { useCallback, useEffect, useRef, useState } from "react";

interface useRequestOptions<TData, TParams> {
  service: (params: TParams, signal?: AbortSignal) => Promise<TData>;
  params: TParams;
  enabled?: boolean;
  onSuccess?: (data: TData) => void;
  onError?: (error: unknown) => void;
  onFinally?: () => void;
}

interface useRequestReturn<TData> {
  data: TData | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  isSuccess: boolean;
  refetch: () => Promise<void>;
  reset: () => void;
}

export function useRequest<TData, TParams = void>({
  service,
  params,
  enabled = true,
  onSuccess,
  onError,
  onFinally,
}: useRequestOptions<TData, TParams>): useRequestReturn<TData> {
  const [data, setData] = useState<TData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null);
  const isMountedRef = useRef(true);

  const reset = useCallback(() => {
    setData(null);
    setIsLoading(false);
    setError(null);
    setIsSuccess(false);
  }, []);

  const execute = useCallback(async () => {
    if (!enabled) {
      reset();
      return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const result = await service(params, controller.signal);

      if (!isMountedRef.current) return;

      setData(result);
      setIsSuccess(true);
      onSuccess?.(result);
    } catch (err) {
      if (!isMountedRef.current) return;

      if ((err as any)?.name === "AbortError") return;

      setError("Something went wrong");
      onError?.(err);
    } finally {
      if (!isMountedRef.current) return;

      setIsLoading(false);
      onFinally?.();
    }
  }, [enabled, params, service, onSuccess, onError, onFinally, reset]);

  useEffect(() => {
    execute();

    return () => {
      isMountedRef.current = false;
      abortControllerRef.current?.abort();
    };
  }, [execute]);

  return {
    data,
    isLoading,
    isError: !!error,
    error,
    isSuccess,
    refetch: execute,
    reset,
  };
}