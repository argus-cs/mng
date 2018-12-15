export const handleTitle = (loading, title) => {
  if(loading) {
    return 'carregando...'
  } else {
    return title
  }
}