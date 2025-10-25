interface CardProps {
        name?: string;
        type?: string;
        power?: string;
        symbol?: string;
        description?: string;
    }
function Card({ 
    // place holder
  name = "sin(x)", 
  type = "Formula",
  power = "90",
  symbol = "Function",
  description = "Trigonometric function"
}: CardProps) {
     return (
     <div className="card">
      <div className="card-header">
        <h3 className="card-name">{name}</h3>
        <span className="card-power">{power}</span>
      </div>
      
      <div className="card-type">{type}</div>
      
      <div className="card-image-box">
        <p>{symbol}</p>
      </div>
      
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;



