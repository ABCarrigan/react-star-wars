export default function StarshipCard(props) {
    console.log(props.name)
        return (
            <div className="starship-card">
                <h3>${props}</h3>
            </div>
        )
    }