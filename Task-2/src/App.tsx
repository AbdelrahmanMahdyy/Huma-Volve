import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Table from "./components/ui/Table";
import "./App.css";

function App() {
  const students = [
    { Name: "Ahmed Ali", Age: 21, City: "Cairo" },
    { Name: "Sara Youssef", Age: 22, City: "Giza" },
    { Name: "Omar Khaled", Age: 20, City: "Alexandria" },
    { Name: "Mona Adel", Age: 23, City: "Mansoura" },
  ];

  return (
    <div className="app">
      <h1>Reusable Components in React</h1>

      <section>
        <h2>Button Component</h2>
        <div className="row">
          <Button
            text="Save"
            variant="primary"
            onClick={() => alert("Save clicked")}
          />
          <Button
            text="Cancel"
            variant="secondary"
            onClick={() => alert("Cancel clicked")}
          />
          <Button
            text="Delete"
            variant="danger"
            onClick={() => alert("Delete clicked")}
          />
          <Button text="Disabled" variant="primary" onClick={() => {}} disabled />
        </div>
      </section>

      <section>
        <h2>Card Component</h2>
        <div className="row">
          <Card
            title="Mountain View"
            description="A beautiful view of the mountains at sunrise."
            image="https://picsum.photos/seed/mountain/400/250"
          />
          <Card title="Project Update" description="A quick summary card that nests custom content below.">
            <Button
              text="View details"
              variant="secondary"
              onClick={() => alert("Viewing project details")}
            />
          </Card>
        </div>
      </section>

      <section>
        <h2>Table Component</h2>
        <Table columns={["Name", "Age", "City"]} data={students} striped />
      </section>
    </div>
  );
}

export default App;