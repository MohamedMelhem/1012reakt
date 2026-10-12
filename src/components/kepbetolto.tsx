interface LampaProps{
    allapot : string


}

export function Lampa(props: LampaProps){
    return <>
     <div>
                  
                    <img src={props.allapot} className="img-fluid" alt="bekapcsolt" />

        
                </div>

       </>
}