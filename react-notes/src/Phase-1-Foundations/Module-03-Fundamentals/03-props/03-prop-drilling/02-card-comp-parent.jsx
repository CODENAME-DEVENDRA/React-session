import { Button } from "./03-button-comp-child";

export function Card({ user }) {
  return (
    <div
      style={{
        border: "1px solid #b9b0b0",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "10px",
      }}
    >
      <Button user={user} />
    </div>
  );
}
