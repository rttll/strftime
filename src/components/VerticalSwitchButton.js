import SwitchVertical from './icons/SwitchVertical';
export default function VerticalSwitchButton(props) {
  return (
    <span
      className='flex items-center justify-center w-12 h-12 text-white transition-colors rounded-full cursor-pointer hover:text-blue-400 hover:bg-white'
      onClick={props.onClick}
      data-test-vertical-switch-button>
      <SwitchVertical />
    </span>
  );
}
