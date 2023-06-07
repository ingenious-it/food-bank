import React from 'react';
const AdminDash = () => {
    return ( 
        <React.Fragment>
  <ul id="slide-out" className="side-nav fixed z-depth-2">
    <li className="center no-padding">
      <div className="indigo darken-2 white-text" style="height: 180px;">
        <div className="row">
          <img style="margin-top: 5%;" width="100" height="100" src="https://res.cloudinary.com/dacg0wegv/image/upload/t_media_lib_thumb/v1463990208/photo_dkkrxc.png" className="circle responsive-img" />

          <p style="margin-top: -13%;">
            Tirth Patel
          </p>
        </div>
      </div>
    </li>

    <li id="dash_dashboard"><a className="waves-effect" href="#!"><b>Dashboard</b></a></li>

    <ul className="collapsible" data-collapsible="accordion">
      <li id="dash_users">
        <div id="dash_users_header" className="collapsible-header waves-effect"><b>Users</b></div>
        <div id="dash_users_body" className="collapsible-body">
          <ul>
            <li id="users_seller">
              <a className="waves-effect" style="text-decoration: none;" href="#!">Seller</a>
            </li>

            <li id="users_customer">
              <a className="waves-effect" style="text-decoration: none;" href="#!">Customer</a>
            </li>
          </ul>
        </div>
      </li>

      <li id="dash_products">
        <div id="dash_products_header" className="collapsible-header waves-effect"><b>Products</b></div>
        <div id="dash_products_body" className="collapsible-body">
          <ul>
            <li id="products_product">
              <a className="waves-effect" style="text-decoration: none;" href="#!">Products</a>
              <a className="waves-effect" style="text-decoration: none;" href="#!">Orders</a>
            </li>
          </ul>
        </div>
      </li>

      <li id="dash_categories">
        <div id="dash_categories_header" className="collapsible-header waves-effect"><b>Categories</b></div>
        <div id="dash_categories_body" className="collapsible-body">
          <ul>
            <li id="categories_category">
              <a className="waves-effect" style="text-decoration: none;" href="#!">Category</a>
            </li>

            <li id="categories_sub_category">
              <a className="waves-effect" style="text-decoration: none;" href="#!">Sub Category</a>
            </li>
          </ul>
        </div>
      </li>

      <li id="dash_brands">
        <div id="dash_brands_header" className="collapsible-header waves-effect"><b>Brands</b></div>
        <div id="dash_brands_body" className="collapsible-body">
          <ul>
            <li id="brands_brand">
              <a className="waves-effect" style="text-decoration: none;" href="#!">Brand</a>
            </li>

            <li id="brands_sub_brand">
              <a className="waves-effect" style="text-decoration: none;" href="#!">Sub Brand</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </ul>

  <header>
    <ul className="dropdown-content" id="user_dropdown">
      <li><a className="indigo-text" href="#!">Profile</a></li>
      <li><a className="indigo-text" href="#!">Logout</a></li>
    </ul>

    <nav className="indigo" role="navigation">
      <div className="nav-wrapper">
        <a data-activates="slide-out" className="button-collapse show-on-" href="#!"><img style="margin-top: 17px; margin-left: 5px;" src="https://res.cloudinary.com/dacg0wegv/image/upload/t_media_lib_thumb/v1463989873/smaller-main-logo_3_bm40iv.gif" /></a>

        <ul className="right hide-on-med-and-down">
          <li>
            <a className='right dropdown-button' href='' data-activates='user_dropdown'><i className=' material-icons'>account_circle</i></a>
          </li>
        </ul>

        <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
      </div>
    </nav>

    <nav>
      <div className="nav-wrapper indigo darken-2">
        <a style="margin-left: 20px;" className="breadcrumb" href="#!">Admin</a>
        <a className="breadcrumb" href="#!">Index</a>

        <div style="margin-right: 20px;" id="timestamp" className="right"></div>
      </div>
    </nav>
  </header>

  <main>
    <div className="row">
      <div className="col s6">
        <div style="padding: 35px;" align="center" className="card">
          <div className="row">
            <div className="left card-title">
              <b>User Management</b>
            </div>
          </div>

          <div className="row">
            <a href="#!">
              <div style="padding: 30px;" className="grey lighten-3 col s5 waves-effect">
                <i className="indigo-text text-lighten-1 large material-icons">person</i>
                <span className="indigo-text text-lighten-1"><h5>Seller</h5></span>
              </div>
            </a>
            <div className="col s1">&nbsp;</div>
            <div className="col s1">&nbsp;</div>

            <a href="#!">
              <div style="padding: 30px;" className="grey lighten-3 col s5 waves-effect">
                <i className="indigo-text text-lighten-1 large material-icons">people</i>
                <span className="indigo-text text-lighten-1"><h5>Customer</h5></span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="col s6">
        <div style="padding: 35px;" align="center" className="card">
          <div className="row">
            <div className="left card-title">
              <b>Product Management</b>
            </div>
          </div>
          <div className="row">
            <a href="#!">
              <div style="padding: 30px;" className="grey lighten-3 col s5 waves-effect">
                <i className="indigo-text text-lighten-1 large material-icons">store</i>
                <span className="indigo-text text-lighten-1"><h5>Product</h5></span>
              </div>
            </a>

            <div className="col s1">&nbsp;</div>
            <div className="col s1">&nbsp;</div>

            <a href="#!">
              <div style="padding: 30px;" className="grey lighten-3 col s5 waves-effect">
                <i className="indigo-text text-lighten-1 large material-icons">assignment</i>
                <span className="indigo-text text-lighten-1"><h5>Orders</h5></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col s6">
        <div style="padding: 35px;" align="center" className="card">
          <div className="row">
            <div className="left card-title">
              <b>Brand Management</b>
            </div>
          </div>

          <div className="row">
            <a href="#!">
              <div style="padding: 30px;" className="grey lighten-3 col s5 waves-effect">
                <i className="indigo-text text-lighten-1 large material-icons">local_offer</i>
                <span className="indigo-text text-lighten-1"><h5>Brand</h5></span>
              </div>
            </a>

            <div className="col s1">&nbsp;</div>
            <div className="col s1">&nbsp;</div>

            <a href="#!">
              <div style="padding: 30px;" className="grey lighten-3 col s5 waves-effect">
                <i className="indigo-text text-lighten-1 large material-icons">loyalty</i>
                <span className="indigo-text text-lighten-1"><h5>Sub Brand</h5></span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="col s6">
        <div style="padding: 35px;" align="center" className="card">
          <div className="row">
            <div className="left card-title">
              <b>Category Management</b>
            </div>
          </div>
          <div className="row">
            <a href="#!">
              <div style="padding: 30px;" className="grey lighten-3 col s5 waves-effect">
                <i className="indigo-text text-lighten-1 large material-icons">view_list</i>
                <span className="indigo-text text-lighten-1"><h5>Category</h5></span>
              </div>
            </a>
            <div className="col s1">&nbsp;</div>
            <div className="col s1">&nbsp;</div>

            <a href="#!">
              <div style="padding: 30px;" className="grey lighten-3 col s5 waves-effect">
                <i className="indigo-text text-lighten-1 large material-icons">view_list</i>
                <span className="truncate indigo-text text-lighten-1"><h5>Sub Category</h5></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="fixed-action-btn click-to-toggle" style="bottom: 45px; right: 24px;">
      <a className="btn-floating btn-large pink waves-effect waves-light">
        <i className="large material-icons">add</i>
      </a>

      <ul>
        <li>
          <a className="btn-floating red"><i className="material-icons">note_add</i></a>
          <a href="" className="btn-floating fab-tip">Add a note</a>
        </li>

        <li>
          <a className="btn-floating yellow darken-1"><i className="material-icons">add_a_photo</i></a>
          <a href="" className="btn-floating fab-tip">Add a photo</a>
        </li>

        <li>
          <a className="btn-floating green"><i className="material-icons">alarm_add</i></a>
          <a href="" className="btn-floating fab-tip">Add an alarm</a>
        </li>

        <li>
          <a className="btn-floating blue"><i className="material-icons">vpn_key</i></a>
          <a href="" className="btn-floating fab-tip">Add a master password</a>
        </li>
      </ul>
    </div>
  </main>

  <footer className="indigo page-footer">
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h5 className="white-text">Icon Credits</h5>
          <ul id='credits'>
            <li>
              Gif Logo made using <a href="https://formtypemaker.appspot.com/" title="Form Type Maker">Form Type Maker</a> from <a href="https://github.com/romannurik/FORMTypeMaker" title="romannurik">romannurik</a>
            </li>
            <li>
              Icons made by <a href="https://material.io/icons/">Google</a>, available under <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache License Version 2.0</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
         <span>Made By <a style='font-weight: bold;' href="https://github.com/piedcipher" target="_blank">Tirth Patel</a></span>
      </div>
    </div>
  </footer>
        </React.Fragment>
     );
}
 
export default AdminDash;