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
  }

  //This destructure must occur after the loading conditional to avoid errors
  const { company, dates, duties, title } = jobs[value]
  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>My Experience</h2>
          <div className="underline"></div>
        </div>
      </section>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                onClick={() => setValue(index)}
                class={`job-btn ${index === value && 'active-btn'} `}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </main>
  )
}

export default App
