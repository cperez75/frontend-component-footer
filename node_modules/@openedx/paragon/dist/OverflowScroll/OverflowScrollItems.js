import PropTypes from 'prop-types';
import { useOverflowScrollItems } from './data';
function OverflowScrollItems(_ref) {
  var children = _ref.children;
  var overflowScrollChildren = useOverflowScrollItems(children);
  return overflowScrollChildren;
}
OverflowScrollItems.propTypes = {
  children: PropTypes.node.isRequired
};
export default OverflowScrollItems;
//# sourceMappingURL=OverflowScrollItems.js.map