import React, { Component } from 'react';
import classes from './Layout.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Aux from '../../hoc/AuxComponent/AuxComponent';

const { remote } = window.require('electron');
const mainWindow = remote.getCurrentWindow();

class Layout extends Component {
	state = {
	  title: 'Tempus',
		showSideDrawer: false,
    statusWindow: false
	};

	handleMinimizeWindow = () => {
    mainWindow.hide();
  };

  handleMaximizeWindow = () => {
    mainWindow.isMaximized() ?
    mainWindow.unmaximize() :
    mainWindow.maximize();
    this.setState( {statusWindow: !this.state.statusWindow});
  };

  handleCloseWindow = () => {
    mainWindow.close();
  };

	sideDrawerClosedHandler = () => {
		this.setState( { showSideDrawer: false } );
	};

	sideDrawerToggleHandler = () => {
		this.setState( ( prevState ) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		} );
	};

	render () {
		return (
			<Aux>
				<div className={classes.Layout}>

          <div className={classes.Topbar}>
            <div className={classes.Title}><i className="fas fa-alarm-clock" />{ this.state.title }</div>
            <div>
              <button onClick={this.handleMinimizeWindow}><i className="fal fa-window-minimize" /></button>
              <button onClick={this.handleMaximizeWindow}>{this.state.statusWindow ? <i className="fal fa-window-restore"/> : <i className="fal fa-window-maximize"/>}</button>
              <button onClick={this.handleCloseWindow}><i className="fal fa-window-close" /></button>
            </div>
          </div>

					<Header drawerToggleClicked={this.sideDrawerToggleHandler} />
					<SideDrawer
						open={this.state.showSideDrawer}
						closed={this.sideDrawerClosedHandler} />
					<main>
						{this.props.children}
					</main>
					<Footer />
				</div>
			</Aux>
		)
	}
}

export default Layout;
