import data from "./data/architecture.json";
import ArchitectureCard from "./components/ArchitectureCard";
import "./App.css"

export default function App() {
  return (
    <div className="dashboard">
      <h1>Spotify Architecture Dashboard</h1>
      <p>A visual overview of Spotify's core system components.</p>

      <div className="card-grid">
        {data.map((item, index) => (
          <ArchitectureCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
