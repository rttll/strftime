import SwitchVertical from './icons/SwitchVertical';
export default function VerticalSwitchButton(props) {
  return (
    // Don't show toggle if there's only one format option. e.g. Time
    <span
      className='flex items-center justify-center w-12 h-12 text-white transition-colors rounded-full cursor-pointer hover:text-blue-400 hover:bg-white'
      onClick={props.onClick}
      data-test-format-toggle>
      <SwitchVertical />
    </span>
  );
}
