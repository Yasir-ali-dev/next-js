export default function ReviewLayout({children}){
    return (
        <div style={{display :"flex"}}> 
            <div 
            style={{flex :1, border:"1px solid red",textAlign:"center"}}
            >
                [reviews-menu]
            </div>
            <div style={{flex :3}}>
                {children}
            </div>
        </div>   
    )
}