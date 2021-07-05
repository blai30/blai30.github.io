const Contact = () => {
  return (
    <div className="mx-auto prose prose-pink md:prose-lg dark:prose-dark">
      <h2>Want to get in touch?</h2>
      <p>
        If you have any business inquiries, shoot me an email! I am open to all
        entry level software engineer opportunities. Feel free to connect with
        me on LinkedIn, download my resume, and explore all of my projects on
        GitHub.
      </p>
      <p>
        <span>Email: </span>
        <a
          id="contact-email"
          href="mailto:brianlai30@outlook.com"
          className="inline-flex items-center no-underline dark:text-pink-400 dark:hover:text-pink-300"
        >
          <span>brianlai30@outlook.com</span>
        </a>
      </p>
      <p>
        <span>Resume: </span>
        <a
          id="contact-resume"
          href="https://blai30.github.io/resume/"
          className="inline-flex items-center no-underline dark:text-pink-400 dark:hover:text-pink-300"
        >
          <span>https://blai30.github.io/resume/</span>
        </a>
      </p>
      <p>
        <span>LinkedIn: </span>
        <a
          id="contact-linkedin"
          href="https://www.linkedin.com/in/blai/"
          className="inline-flex items-center no-underline dark:text-pink-400 dark:hover:text-pink-300"
        >
          <span>https://www.linkedin.com/in/blai/</span>
        </a>
      </p>
      <p>
        <span>GitHub: </span>
        <a
          id="contact-github"
          href="https://github.com/blai30/"
          className="inline-flex items-center no-underline dark:text-pink-400 dark:hover:text-pink-300"
        >
          <span>https://github.com/blai30/</span>
        </a>
      </p>
    </div>
  )
}

export default Contact
