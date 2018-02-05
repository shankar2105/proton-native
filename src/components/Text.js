import DesktopComponent from './DesktopComponent';
import libui from 'libui-node';

class Text extends DesktopComponent {
  expectedProps = ['enabled', 'visible']
  expectedChild = 'text'

  constructor(root, props) {
    super(root, props);
    this.root = root;
    this.props = props;
    this.element = new libui.UiLabel();
    this.initialProps(props)
  }

  render(parent) {
    if (this.props.children) {
      this.element.text = this.props.children;
    }
    this.addParent(parent)
    this.renderChildNode();
  }
}

export default Text;
