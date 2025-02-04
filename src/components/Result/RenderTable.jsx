export default function RenderTable({isActive, children, ...props}) {
  return (
    <table {...props}>
      {children}
    </table>
  );
}