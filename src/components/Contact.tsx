const Contact = () => {
  return (
    <div className="prose prose-zinc prose-rose mx-auto hover:prose-a:text-rose-700 dark:prose-invert dark:prose-a:text-rose-400 hover:dark:prose-a:text-rose-300 print:dark:prose-zinc print:dark:prose-a:text-rose-600 print:dark:hover:prose-a:text-rose-700 md:prose-lg">
      <h2>Want to get in touch?</h2>
      <p>
        If you have any business inquiries, shoot me an email! I am open to
        software engineer opportunities. Feel free to connect with me on
        LinkedIn, download my resume, and explore all of my projects on GitHub.
      </p>
      <p>
        <span>Email: </span>
        <a
          id="contact-email"
          href="mailto:contact@bhlai.com"
          className="inline-flex items-center no-underline"
        >
          <span>contact@bhlai.com</span>
        </a>
      </p>
      <p>
        <span>Resume: </span>
        <a
          id="contact-resume"
          href="https://blai30.github.io/resume/"
          className="inline-flex items-center no-underline"
        >
          <span>https://blai30.github.io/resume/</span>
        </a>
      </p>
      <p>
        <span>LinkedIn: </span>
        <a
          id="contact-linkedin"
          href="https://www.linkedin.com/in/blai/"
          className="inline-flex items-center no-underline"
        >
          <span>https://www.linkedin.com/in/blai/</span>
        </a>
      </p>
      <p>
        <span>GitHub: </span>
        <a
          id="contact-github"
          href="https://github.com/blai30/"
          className="inline-flex items-center no-underline"
        >
          <span>https://github.com/blai30/</span>
        </a>
      </p>
    </div>
  )
}

export default Contact
