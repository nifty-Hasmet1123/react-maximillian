export default function RenderTable({children, ...props}) {
  return (
    <table {...props}>
      {children}
    </table>
  );
}