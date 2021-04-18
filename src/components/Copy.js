import copy from 'copy-to-clipboard';

export default function Copy(props) {
  return (
    <span
      onClick={() => {
        console.log(props);
        copy(props.message);
      }}>
      {props.children}
    </span>
  );
}
