import { useState, useEffect, useCallback } from 'react';
import { getProjects, getFeaturedProjects } from '../api/projectApi';

export const useProjects = ({ featured = false, page = 1, limit = 12, tech } = {}) => {
  const [projects, setProjects] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = featured
        ? await getFeaturedProjects()
        : await getProjects(page, limit, tech);
      setProjects(data.data);
      if (data.pagination) setPagination(data.pagination);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  }, [featured, page, limit, tech]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { projects, pagination, loading, error, refetch: fetchData };
};
