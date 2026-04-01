export function SplineScene({ url }: { url: string }) {
  return (
    <iframe 
      src={url} 
      frameBorder="0" 
      width="100%" 
      height="100%" 
      className="w-full h-full bg-transparent"
      title="Entorno 3D IPE ROXO"
    ></iframe>
  )
}