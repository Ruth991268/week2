export default function GroupName(){
    const names=["Ruth ", "Rediet", "Birhanu", "Mastewal","Hermela"]
    return(
        <div>
            <ul>
                {names.map((name)=>(
                    <li key={name}>
                        {name}
w
                    </li>
                ))}
            </ul>
        </div>
    )
}