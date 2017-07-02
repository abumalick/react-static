import React, {Component, PropTypes} from 'react';
import {Link} from 'phenomic';
import Hamburger from './Hamburger';
import {bgNearBlackNl, invisibleNl} from './styles.css';

class Nav extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      scrolled: false,
      menuOpened: false,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  scrollTopLimit = 100;
  handleScroll = e => {
    if (e.srcElement.body.scrollTop > this.scrollTopLimit) {
      !this.state.scrolled && this.setState({scrolled: true});
    } else {
      this.state.scrolled && this.setState({scrolled: false});
    }
  };
  handleClick = () => {
    this.setState(state => ({menuOpened: !state.menuOpened}));
  };
  render() {
    const {metadata: {config}} = this.context;
    const {menuOpened, scrolled} = this.state;
    return (
      <header
        className={`fixed left-0 right-0 white z-9999 transition ${bgNearBlackNl} ${scrolled
          ? 'bg-near-black'
          : ''}`}>
        <nav
          className={`mw8 center pa2 pa3-l pv1-l flex flex-wrap flex-column flex-row-l justify-between items-center transition`}>
          <div className="flex items-center flex-column flex-row-l flex-wrap">
            {config.logo &&
              <Link className="h2 flex items-center" to="/">
                <img
                  className={`transition h-100 ${scrolled ? 'h-75-l' : ''}`}
                  src={config.logo}
                />
              </Link>}
            {config.menuLeft &&
              config.menuLeft.map(({title, link}) =>
                <Link
                  key={title}
                  className={`mv0-l pa3-l ph4-l w-100 w-auto-l flex items-center no-underline color-inherit hover-bg-white-20 transition  ${menuOpened
                    ? 'h-100 pa3 mv1'
                    : `${invisibleNl} o-0 pv0 mv0`} ${scrolled
                    ? 'pv2-l'
                    : 'pv3-l'}`}
                  activeClassName="bg-white-20 white"
                  to={link}>
                  <div className="center">{title}</div>
                </Link>,
              )}
          </div>
          {config.menuRight &&
            config.menuRight[0] &&
            <div
              className={`flex items-center flex-column flex-row-l flex-wrap justify-end-l`}>
              {config.menuRight.map(({title, icon, link}) =>
                <a
                  href={link}
                  className={`mv0-l  ph4-l w-100 w-auto-l flex items-center no-underline color-inherit hover-bg-white-20 transition  ${menuOpened
                    ? 'h-100 pa3 mv1'
                    : `${invisibleNl} o-0 pv0 mv0`} ${scrolled
                    ? 'pv1-l'
                    : 'pv3-l'}`}>
                  {icon && <img src={icon} className="o-70 mr3 h-auto" />}
                  {title}
                </a>,
              )}
            </div>}
        </nav>
        <Hamburger
          className={`absolute top-1 right-2 dn-l`}
          clicked={menuOpened}
          onClick={() => {
            this.setState(state => ({menuOpened: !state.menuOpened}));
          }}
        />
      </header>
    );
  }
}

Nav.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Nav;
