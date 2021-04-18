import copy from 'copy-to-clipboard';

export default function Copy(props) {
  return (
    <span
      onClick={() => {
        copy(props.message);
      }}>
      {props.children}
    </span>
  );
}
