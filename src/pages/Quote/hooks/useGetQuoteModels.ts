import { useRequest } from "@/hooks/useRequest";
import { quoteFromService } from "@/services/Quote/QuoteForm.services";
import { useMemo } from "react";

interface useGetQuoteModelsReturn {
    data: any[] | null;
    error: boolean;
    isLoading: boolean;
    refetch: () => Promise<void>;
}

export function useGetQuoteModels(): useGetQuoteModelsReturn {
    const {
        data,
        isLoading,
        isError,
        refetch
    } = useRequest<any[], void>({
        service: (_, signal) => quoteFromService.getCarModels(signal),
        params: undefined
    });

    const modelData = useMemo<any[] | null>(() => {
        if (!data) return null;

        return data.map((item) => {
            
        })
    }, [data]);

    return {
        data: modelData, 
        isLoading,
        error: isError,
        refetch,
    }
}