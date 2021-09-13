import React, { useState, useEffect } from "react"
import axios from "axios"
import { FaAngleDoubleRight } from "react-icons/fa"
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project"
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setJobs(res.data)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  if (isLoading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  } else {
    return (
      <main>
        <section className="section">
          <div className="title">
            <h2>JOBS</h2>
            <div className="underline"></div>
          </div>
        </section>
        <div className="jobs-center">
          {jobs.map(job => {
            return <h3>{job.company}</h3>
          })}
        </div>
      </main>
    )
  }
}

export default App
