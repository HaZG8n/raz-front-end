import css from "src/commons/styles/banner.module.css";

export default function index({ title, text }) {
  return (
    <div className={css.banner}>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
}
