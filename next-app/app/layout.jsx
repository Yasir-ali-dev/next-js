export default function RootLayout({children}){
    return(
        <html lang="">
            <body>          
                <div>Shared Root Layout</div>  
                {children}
            </body>
        </html>
    )
}