import { apiClient } from "@/services/client.service";

export const quoteFromService = {
  async getCarModels(signal?: AbortSignal) {
    return apiClient.get<any>(`/models/`, { signal });
  },

  async getCardVersions(model: string, signal?: AbortSignal) {
    return apiClient.get<any>(`/version/${model}`, { signal });
  },
};
