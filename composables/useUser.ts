export function useUser () {
  const { data } = useAuth()
  return computed(() => data.value?.user)
}
