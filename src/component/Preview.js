import React, { Fragment } from 'react'

const Preview = () => {
  return (

<Fragment>  
  
<div class="container">
  <h2  className='bg-info text-centre text-warning text-center'>Preview Page</h2>
  
  <form class="form-inline">
    <div class="form-group">
    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
      <label for="Name control-label">Enter Name</label>
      <input type="text" class="form-control" id="Name" placeholder="Enter Name" name="email"/>
    </div>
    <div class="form-group">
      <label for="College">College Name</label>
      <input type="text" class="form-control" id="College" placeholder="College Name" name="pwd"/>
    </div>
  
  

    <label class="checkbox-inline mt-4 mb-3">
      <input type="checkbox" value=""/> College Student
    </label>
    <label class=" checkbox-inline m-2">
      <input type="checkbox" value=""/> Working
    </label>
    <label class="checkbox-inline m-2">
      <input type="checkbox" value=""/>Student Others
    </label>


    <h2 >Gender:-</h2>
    <label class="radio-inline m-2">
      <input type="radio" name="Maleradio" checked/>Male
    </label>
    <label class="radio-inline">
      <input type="radio" name="optradio"/>Female
    </label>
    <label class="radio-inline">
      <input type="radio" name="optradio"/>  Other
    </label>









    <h2> Additional Info___ </h2>
    <div class="form-group">
      <label for="comment">Comment:</label>
      <textarea class="form-control" rows="5" id="comment"></textarea>
    </div>

    <button type="submit" class="btn btn-success mt-4">Submit</button>
  </form>
</div>
  
  
  
  
       </Fragment>
    
  )
}

export default Preview