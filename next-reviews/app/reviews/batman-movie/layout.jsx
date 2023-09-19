export default function BatmanLayout({children}){
    return (
        <>
        <div style={{border:"1px solid grey"}}>
            [The Batman Story]
        </div>
        <div>
            {children}
        </div>
        </>
    )
}