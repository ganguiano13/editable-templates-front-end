
interface IGridProps {
    size: number,

}

export const Grid = ({size}: IGridProps) => {
  return (
    <div className={`grid grid-cols-${size} gap-1`}>
        {Array.from({ length: size }, (_, i) => (
            <div className='flex-col mt-20'>
            
            </div>
        ))}
    </div> 
  )
}
