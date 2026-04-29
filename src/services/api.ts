// API service for communicating with Django backend
const API_BASE_URL = 'http://localhost:8000/api';

interface Anime {
  id: number;
  name: string;
  type: string;
  genre: string;
}

interface Collection {
  id: number;
  views: number;
}

class APIService {
  private baseURL = API_BASE_URL;

  async getAnimeList(): Promise<Anime[]> {
    try {
      const response = await fetch(`${this.baseURL}/anime/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching anime list:', error);
      return [];
    }
  }

  async getCollections(): Promise<Collection[]> {
    try {
      const response = await fetch(`${this.baseURL}/collections/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching collections:', error);
      return [];
    }
  }

  async submitSurveyResponse(data: any): Promise<any> {
    try {
      const response = await fetch(`${this.baseURL}/survey/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error submitting survey response:', error);
      throw error;
    }
  }

  async getAnalytics(): Promise<any> {
    try {
      const response = await fetch(`${this.baseURL}/analytics/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching analytics:', error);
      return null;
    }
  }
}

export const apiService = new APIService();
