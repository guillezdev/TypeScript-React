import Counter from "./components/Counter"
import User from "./components/User"


function App() {


  return (
    <div className="w-full flex justify-center mx-auto">
      <main className="max-w-5xl w-full flex flex-col gap-4">
        <h1 className="text-center">Aprendiendo Typescript</h1>
        <hr />
        
        <Counter />
        <hr />
        <User />
      </main>
    </div>
  )
}

export default App
