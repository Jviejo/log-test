export function json(obj: any) {
    if (obj) 
      return JSON.parse(JSON.stringify(obj))
    return null
  }

  export function formatDate(date: Date) {
    return new Intl.DateTimeFormat('es-ES',{
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    
    }).format(date);
  
  }
  

  export function formatRepo(item: any) {
    const user = item.user.split(":")[1];
    return `https://github.com/${user}/${item.repo}`
  }