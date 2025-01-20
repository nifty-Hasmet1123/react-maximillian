function Section({ title, children, ...props }) {
  // forwarding props to wrapped elements (like  id, class) this will make the code scalable without manually putting it on the html tag element
  return <section {...props}>
    <h2>{title}</h2>
    {children}
  </section>
}

export default Section;