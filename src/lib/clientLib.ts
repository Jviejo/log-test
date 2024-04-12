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
  