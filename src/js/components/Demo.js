
const Demo = () => {
	return <>
	<section class="section">
		<div class="box">
		  <article class="media">
		    <div class="media-left">
		      <figure class="image is-64x64 is-square is-rounded">
		        <img class="is-rounded" src="https://i.pinimg.com/originals/00/2d/57/002d5714c44f88a16c1f0bdfa97ca05e.jpg" alt="Image" />
		      </figure>
		    </div>
		    <div class="media-content">
		      <div class="content">
		        <p>
		          <strong>AF</strong> <small>@tarendai</small>
		          <br/>
		          Fellow pokemons, please be patient while I wire up things. Until the various screens are hooked up, here's a test screen of various UI elements.
		        </p>
		      </div>
		    </div>
		  </article>
		</div>
	</section>
	<section class="section" id="typography">
	  <h1 class="title"> Typography </h1>
	  <hr/>
	  <div class="columns">
	    <div class="column">
	      <h1 class="title is-1"> Title 1 </h1>
	      <h2 class="title is-2"> Title 2 </h2>
	      <h3 class="title is-3"> Title 3 </h3>
	      <h4 class="title is-4"> Title 4 </h4>
	      <h5 class="title is-5"> Title 5 </h5>
	      <h6 class="title is-6"> Title 6 </h6> </div>
	    <div class="column">
	      <h1 class="subtitle is-1"> Subtitle 1 </h1>
	      <h2 class="subtitle is-2"> Subtitle 2 </h2>
	      <h3 class="subtitle is-3"> Subtitle 3 </h3>
	      <h4 class="subtitle is-4"> Subtitle 4 </h4>
	      <h5 class="subtitle is-5"> Subtitle 5 </h5>
	      <h6 class="subtitle is-6"> Subtitle 6 </h6> </div>
	    <div class="column">
	      <h1 class="title"> Title </h1>
	      <h2 class="subtitle"> Subtitle </h2>
	      <p class="title is-1"> Title 1 </p>
	      <p class="subtitle is-3"> Subtitle 3 </p>
	      <p class="title is-2"> Title 2 </p>
	      <p class="subtitle is-4"> Subtitle 4 </p>
	      <p class="title is-3"> Title 3 </p>
	      <p class="subtitle is-5"> Subtitle 5 </p>
	    </div>
	  </div>
	</section>
	<section class="section" id="button">
	  <h1 class="title"> Button </h1>
	  <hr/>
	  <div class="columns">
	    <div class="column">
	      <div class="buttons">
	        <a class="button"> Button </a>
	        <a class="button is-white"> White </a>
	        <a class="button is-light"> Light </a>
	        <a class="button is-dark"> Dark </a>
	        <a class="button is-black"> Black </a>
	        <a class="button is-link"> Link </a>
	        <a class="button is-text"> Link </a>
	      </div>
	      <div class="buttons">
	        <a class="button is-primary"> Primary </a>
	        <a class="button is-info"> Info </a>
	        <a class="button is-success"> Success </a>
	        <a class="button is-warning"> Warning </a>
	        <a class="button is-danger"> Danger </a>
	      </div>
	      <div class="buttons">
	        <a class="button is-focused"> Focus </a>
	        <a class="button is-primary is-focused"> Focus </a>
	        <a class="button is-info is-focused"> Focus </a>
	        <a class="button is-success is-focused"> Focus </a>
	        <a class="button is-warning is-focused"> Focus </a>
	        <a class="button is-danger is-focused"> Focus </a>
	      </div>
	      <div class="buttons">
	        <a class="button is-hovered"> Hover </a>
	        <a class="button is-primary is-hovered"> Hover </a>
	        <a class="button is-info is-hovered"> Hover </a>
	        <a class="button is-success is-hovered"> Hover </a>
	        <a class="button is-warning is-hovered"> Hover </a>
	        <a class="button is-danger is-hovered"> Hover </a>
	      </div>
	      <div class="buttons">
	        <a class="button is-active"> Active </a>
	        <a class="button is-primary is-active"> Active </a>
	        <a class="button is-info is-active"> Active </a>
	        <a class="button is-success is-active"> Active </a>
	        <a class="button is-warning is-active"> Active </a>
	        <a class="button is-danger is-active"> Active </a>
	      </div>
	      <div class="buttons">
	        <a class="button is-loading"> Loading </a>
	        <a class="button is-primary is-loading"> Loading </a>
	        <a class="button is-info is-loading"> Loading </a>
	        <a class="button is-success is-loading"> Loading </a>
	        <a class="button is-warning is-loading"> Loading </a>
	        <a class="button is-danger is-loading"> Loading </a>
	      </div>
	      <p class="field">
	        <a class="button">
	          <span class="icon is-small">
	            <i class="fa fa-bold"> </i>
	          </span>
	        </a>
	        <a class="button">
	          <span class="icon is-small">
	            <i class="fa fa-italic"> </i>
	          </span>
	        </a>
	        <a class="button">
	          <span class="icon is-small">
	            <i class="fa fa-underline"> </i>
	          </span>
	        </a>
	        <a class="button">
	          <span class="icon">
	            <i class="fab fa-github"> </i>
	          </span>
	          <span> GitHub </span>
	        </a>
	        <a class="button is-primary">
	          <span class="icon">
	            <i class="fab fa-twitter"> </i>
	          </span>
	          <span> Twitter </span>
	        </a>
	        <a class="button is-success">
	          <span class="icon is-small">
	            <i class="fa fa-check"> </i>
	          </span>
	          <span> Save </span>
	        </a>
	        <a class="button is-danger is-outlined">
	          <span> Delete </span>
	          <span class="icon is-small">
	            <i class="fa fa-times"> </i>
	          </span>
	        </a>
	      </p>
	      <div class="field has-addons">
	        <p class="control">
	          <a class="button">
	            <span class="icon is-small">
	              <i class="fa fa-bold"></i>
	            </span>
	            <span>Bold</span>
	          </a>
	        </p>
	        <p class="control">
	          <a class="button">
	            <span class="icon is-small">
	              <i class="fa fa-italic"></i>
	            </span>
	            <span>Italic</span>
	          </a>
	        </p>
	        <p class="control">
	          <a class="button">
	            <span class="icon is-small">
	              <i class="fa fa-underline"></i>
	            </span>
	            <span>Underline</span>
	          </a>
	        </p>
	      </div>

	      <div class="field has-addons">
	        <p class="control">
	          <a class="button">
	            <span class="icon is-small">
	              <i class="fa fa-align-left"></i>
	            </span>
	            <span>Left</span>
	          </a>
	        </p>
	        <p class="control">
	          <a class="button">
	            <span class="icon is-small">
	              <i class="fa fa-align-center"></i>
	            </span>
	            <span>Center</span>
	          </a>
	        </p>
	        <p class="control">
	          <a class="button">
	            <span class="icon is-small">
	              <i class="fa fa-align-right"></i>
	            </span>
	            <span>Right</span>
	          </a>
	        </p>
	      </div>
	      <div class="buttons">
	        <a class="button is-rounded">Rounded</a>
	        <a class="button is-primary is-rounded">Rounded</a>
	        <a class="button is-link is-rounded">Rounded</a>
	        <a class="button is-info is-rounded">Rounded</a>
	        <a class="button is-success is-rounded">Rounded</a>
	        <a class="button is-danger is-rounded">Rounded</a>
	      </div>
	    </div>
	    <div class="column">
	      <div class="buttons">
	        <a class="button is-small"> Small </a>
	        <a class="button"> Normal </a>
	        <a class="button is-medium"> Medium </a>
	        <a class="button is-large"> Large </a>
	      </div>
	      <div class="buttons">
	        <a class="button is-outlined"> Outlined </a>
	        <a class="button is-primary is-outlined"> Outlined </a>
	        <a class="button is-info is-outlined"> Outlined </a>
	        <a class="button is-success is-outlined"> Outlined </a>
	        <a class="button is-danger is-outlined"> Outlined </a>
	      </div>
	      <div class="buttons notification is-primary">
	        <a class="button is-primary is-inverted is-outlined"> Invert Outlined </a>
	        <a class="button is-info is-inverted is-outlined"> Invert Outlined </a>
	        <a class="button is-success is-inverted is-outlined"> Invert Outlined </a>
	        <a class="button is-danger is-inverted is-outlined"> Invert Outlined </a>
	      </div>
	      <div class="buttons notification is-primary">
	        <a class="button is-primary is-inverted"> Inverted </a>
	        <a class="button is-info is-inverted"> Inverted </a>
	        <a class="button is-success is-inverted"> Inverted </a>
	        <a class="button is-danger is-inverted"> Inverted </a>
	      </div>
	      <p class="buttons">
	        <a class="button is-small">
	          <span class="icon is-small">
	            <i class="fab fa-github"> </i>
	          </span>
	          <span> GitHub </span>
	        </a>
	        <a class="button">
	          <span class="icon">
	            <i class="fab fa-github"> </i>
	          </span>
	          <span> GitHub </span>
	        </a>
	        <a class="button is-medium">
	          <span class="icon">
	            <i class="fab fa-github"> </i>
	          </span>
	          <span> GitHub </span>
	        </a>
	        <a class="button is-large">
	          <span class="icon is-medium">
	            <i class="fab fa-github"> </i>
	          </span>
	          <span> GitHub </span>
	        </a>
	      </p>
	      <p class="field">
	        <a class="button is-small">
	          <span class="icon is-small">
	            <i class="fa fa-heading"> </i>
	          </span>
	        </a>
	      </p>
	      <p class="field">
	        <a class="button">
	          <span class="icon is-small">
	            <i class="fa fa-heading"> </i>
	          </span>
	        </a>
	        <a class="button">
	          <span class="icon">
	            <i class="fa fa-heading fa-lg"> </i>
	          </span>
	        </a>
	      </p>
	      <p class="field">
	        <a class="button is-medium">
	          <span class="icon is-small">
	            <i class="fa fa-heading"> </i>
	          </span>
	        </a>
	        <a class="button is-medium">
	          <span class="icon">
	            <i class="fa fa-heading fa-lg"> </i>
	          </span>
	        </a>
	        <a class="button is-medium">
	          <span class="icon is-medium">
	            <i class="fa fa-heading fa-2x"> </i>
	          </span>
	        </a>
	      </p>
	      <p class="field">
	        <a class="button is-large">
	          <span class="icon is-small">
	            <i class="fa fa-heading"> </i>
	          </span>
	        </a>
	        <a class="button is-large">
	          <span class="icon is-medium">
	            <i class="fa fa-heading fa-lg"> </i>
	          </span>
	        </a>
	        <a class="button is-large">
	          <span class="icon is-large">
	            <i class="fa fa-heading fa-2x"> </i>
	          </span>
	        </a>
	      </p>
	    </div>
	  </div>
	</section>
	</>;
};


export default Demo;