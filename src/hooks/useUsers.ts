import { useEffect, useState } from "react"
import userService, { User } from "../services/userService"
import { AxiosError, CanceledError } from '../services/apiClient'

const useUsers =()=>{

    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState<number | undefined>()
    const [isLoading, SetLoading] = useState(false)
  
    useEffect(() => {
      const fetchUsers = async () => {
        SetLoading(true)
        const { request, cancel } = userService.getAll<User>()
        try {
          const res = await request
          setUsers(res.data)
        } catch (error) {
          if (error instanceof CanceledError) return
          setError((error as AxiosError).response?.status)
        } finally {
          SetLoading(false)
        }
        return () => cancel()
      }
  
      fetchUsers()
    }, [])

    
    return {users, error, isLoading, setUsers, setError}

      /*  useEffect(() => {
    const controller = new AbortController()
    SetLoading(true)
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
      .then((res) => {
        setUsers(res.data)
        SetLoading(false)
      })
      .catch((error) => {
        if (error instanceof CanceledError) return
        setError(error.response.status)
        SetLoading(false)
      })

    return () => controller.abort()
  }, []) */
}

export default useUsers