import React, {Component} from 'react';
import './Skills.css';

class Skills extends Component {
  render(){
    return(
      <a className="anchor" id="skills_section">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-content">
            <div className="skills-skill">
              <div id="language-skill" className="individual-skill">
                <svg id="language-icon" className="skill-graphic"  xmlns="http://www.w3.org/2000/svg"viewBox="0 0 640 512"><path d="M290.547 189.039c-20.295-10.149-44.147-11.199-64.739-3.89 42.606 0 71.208 20.475 85.578 50.576 8.576 17.899-5.148 38.071-23.617 38.071 18.429 0 32.211 20.136 23.617 38.071-14.725 30.846-46.123 50.854-80.298 50.854-.557 0-94.471-8.615-94.471-8.615l-66.406 33.347c-9.384 4.693-19.815.379-23.895-7.781L1.86 290.747c-4.167-8.615-1.111-18.897 6.946-23.621l58.072-33.069L108 159.861c6.39-57.245 34.731-109.767 79.743-146.726 11.391-9.448 28.341-7.781 37.51 3.613 9.446 11.394 7.78 28.067-3.612 37.516-12.503 10.559-23.618 22.509-32.509 35.57 21.672-14.729 46.679-24.732 74.186-28.067 14.725-1.945 28.063 8.336 29.73 23.065 1.945 14.728-8.336 28.067-23.062 29.734-16.116 1.945-31.12 7.503-44.178 15.284 26.114-5.713 58.712-3.138 88.079 11.115 13.336 6.669 18.893 22.509 12.224 35.848-6.389 13.06-22.504 18.617-35.564 12.226zm-27.229 69.472c-6.112-12.505-18.338-20.286-32.231-20.286a35.46 35.46 0 0 0-35.565 35.57c0 21.428 17.808 35.57 35.565 35.57 13.893 0 26.119-7.781 32.231-20.286 4.446-9.449 13.614-15.006 23.339-15.284-9.725-.277-18.893-5.835-23.339-15.284zm374.821-37.237c4.168 8.615 1.111 18.897-6.946 23.621l-58.071 33.069L532 352.16c-6.39 57.245-34.731 109.767-79.743 146.726-10.932 9.112-27.799 8.144-37.51-3.613-9.446-11.394-7.78-28.067 3.613-37.516 12.503-10.559 23.617-22.509 32.508-35.57-21.672 14.729-46.679 24.732-74.186 28.067-10.021 2.506-27.552-5.643-29.73-23.065-1.945-14.728 8.336-28.067 23.062-29.734 16.116-1.946 31.12-7.503 44.178-15.284-26.114 5.713-58.712 3.138-88.079-11.115-13.336-6.669-18.893-22.509-12.224-35.848 6.389-13.061 22.505-18.619 35.565-12.227 20.295 10.149 44.147 11.199 64.739 3.89-42.606 0-71.208-20.475-85.578-50.576-8.576-17.899 5.148-38.071 23.617-38.071-18.429 0-32.211-20.136-23.617-38.071 14.033-29.396 44.039-50.887 81.966-50.854l92.803 8.615 66.406-33.347c9.408-4.704 19.828-.354 23.894 7.781l44.455 88.926zm-229.227-18.618c-13.893 0-26.119 7.781-32.231 20.286-4.446 9.449-13.614 15.006-23.339 15.284 9.725.278 18.893 5.836 23.339 15.284 6.112 12.505 18.338 20.286 32.231 20.286a35.46 35.46 0 0 0 35.565-35.57c0-21.429-17.808-35.57-35.565-35.57z"/></svg>
                
                <h2>Languages</h2>
                <p className="skills">
                  Java, Python, JavaScript, HTML, CSS, JSON
                </p>
              </div>
              <div id="frameworks-skill" className="individual-skill">
                <svg id="framework-icon" className="skill-graphic" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g><path d="m35 8c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3zm-4 0c0-.552.449-1 1-1s1 .448 1 1-.449 1-1 1-1-.448-1-1z"/><path d="m6.5 41.4c-1.433.828-1.925 2.666-1.099 4.099.555.961 1.565 1.499 2.604 1.499.508 0 1.023-.129 1.495-.4 1.432-.828 1.924-2.666 1.098-4.099-.828-1.432-2.667-1.925-4.098-1.099zm2 3.465c-.479.277-1.091.111-1.366-.366-.276-.478-.111-1.091.366-1.366.477-.276 1.09-.11 1.365.366.276.478.111 1.091-.365 1.366z"/><path d="m57.5 41.4c-1.432-.825-3.271-.332-4.098 1.099-.827 1.433-.334 3.271 1.098 4.099h.001c.471.271.986.4 1.494.4 1.038 0 2.049-.538 2.604-1.499.827-1.433.334-3.27-1.099-4.099zm-.633 3.099c-.275.478-.889.643-1.365.366-.478-.275-.642-.889-.366-1.366.275-.478.888-.644 1.365-.366.477.275.642.888.366 1.366z"/><path d="m59.501 37.937c-1.619-.935-3.504-1.186-5.312-.699-1.617.433-2.992 1.41-3.935 2.771l-7.254-3.628v-8.763l11.082-5.542c.664.848 1.565 1.469 2.624 1.753.431.116.868.173 1.302.173.866 0 1.721-.228 2.492-.672 1.157-.668 1.984-1.746 2.33-3.036s.168-2.638-.5-3.794-1.746-1.983-3.036-2.329c-1.289-.349-2.637-.168-3.794.499-1.157.668-1.984 1.746-2.33 3.036-.231.861-.208 1.743.018 2.581l-10.188 5.095v-6.382h-10v-4.08c3.387-.488 6-3.401 6-6.92 0-3.859-3.14-7-7-7s-7 3.141-7 7c0 3.519 2.613 6.432 6 6.92v4.08h-10v6.381l-10.188-5.094c.226-.838.249-1.72.018-2.581-.346-1.29-1.173-2.368-2.33-3.036-1.157-.667-2.505-.848-3.794-.499-1.29.346-2.368 1.173-3.036 2.329s-.846 2.504-.5 3.794 1.173 2.368 2.33 3.036c.771.444 1.625.672 2.492.672.435 0 .872-.057 1.302-.173 1.059-.284 1.96-.905 2.623-1.753l11.083 5.541v8.763l-7.255 3.627c-.942-1.361-2.318-2.338-3.935-2.771-1.806-.485-3.692-.236-5.312.699-3.342 1.931-4.492 6.22-2.563 9.563 1.295 2.243 3.652 3.499 6.074 3.499 1.187 0 2.389-.302 3.488-.937 2.923-1.688 4.169-5.181 3.145-8.266l6.358-3.177v6.383h10v8.101c-2.279.465-4 2.484-4 4.899 0 2.757 2.243 5 5 5s5-2.243 5-5c0-2.414-1.721-4.434-4-4.899v-8.101h10v-6.383l6.356 3.178c-1.024 3.086.222 6.578 3.145 8.266 1.1.635 2.302.937 3.488.937 2.421 0 4.779-1.256 6.074-3.499 1.93-3.343.78-7.632-2.562-9.562zm-4.399-19.713c.208-.773.704-1.421 1.398-1.821.471-.272.986-.401 1.495-.401 1.038 0 2.048.538 2.603 1.499.4.694.507 1.502.3 2.276-.208.773-.704 1.421-1.398 1.821-1.432.828-3.271.335-4.098-1.098-.401-.694-.507-1.502-.3-2.276zm-28.102-10.224c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5zm-18.402 12.5c-.827 1.433-2.666 1.926-4.098 1.098-.694-.4-1.19-1.048-1.398-1.821-.207-.774-.101-1.582.3-2.276.555-.961 1.565-1.499 2.603-1.499.509 0 1.024.129 1.495.401.694.4 1.19 1.048 1.398 1.821.207.774.101 1.582-.3 2.276zm1.901 27.829c-2.389 1.378-5.452.558-6.83-1.83s-.557-5.451 1.83-6.83c.771-.445 1.625-.673 2.492-.673.435 0 .872.058 1.302.173 1.29.346 2.368 1.173 3.036 2.33 1.379 2.388.557 5.451-1.83 6.83zm24.501 9.671c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm6-15h-18v-22h18zm19.331 3.499c-1.377 2.389-4.443 3.209-6.83 1.83s-3.208-4.442-1.83-6.83c.668-1.157 1.746-1.984 3.036-2.33 1.289-.345 2.637-.169 3.794.5 2.387 1.379 3.208 4.442 1.83 6.83z"/><path d="m39 31h-6v2h-4v2h-4v6h14zm-12 6h2v2h-2zm4 2v-4h2v4zm6 0h-2v-6h2z"/><path d="m25 23h2v2h-2z"/><path d="m29 23h10v2h-10z"/><path d="m25 27h14v2h-14z"/></g></svg>
                
                <h2>Frameworks</h2>
                <p className="skills">
                  ReactJS, React Native, Bootstrap, MaterialUI, jQuery
                </p>
              </div>

              <div id="tools-skill" className="individual-skill">
                <svg id="tools-icon" className="skill-graphic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 376.846 376.846"><path d="M364.966 372.743c2.382-2.39 4.316-4.324 4.316-4.324l4.316-4.324c2.382-2.398-1.691-13.453-9.104-24.695l-19.013-28.865c-7.413-11.242-19.127-21.565-26.174-23.044-7.047-1.488-12.762-2.691-12.762-2.691l-57.298-57.274-20.858 20.874 57.25 57.282 2.707 12.762c1.488 7.039 11.819 18.769 23.061 26.174l28.881 19.037c11.241 7.405 22.296 11.478 24.678 9.088zM13.608 74.197l85.139 85.139 10.632 10.608c.244.26.48.398.715.642l14.062-14.071L23.728 56.086c-2.447-2.422-2.447-6.397 0-8.795 2.422-2.455 6.34-2.455 8.795 0l100.396 100.453 15.664-15.696L48.154 31.635a6.172 6.172 0 010-8.795c2.422-2.422 6.365-2.422 8.763 0l100.477 100.477 14.038-14.087c-.211-.244-.366-.504-.585-.74l-11.161-11.177-84.594-84.57c-16.972-17.005-44.52-16.981-61.485 0-16.996 16.966-16.996 44.481.001 61.454z"/><path d="M375.728 81.651c-1.024-13.428-12.892-16.038-22.41-6.519l-33.262 33.27c-7.722 7.779-20.378 7.755-28.125 0l-21.549-21.524c-7.803-7.844-7.779-20.46-.024-28.247l34.392-34.359c9.527-9.519 7.112-21.817-6.259-23.41-25.865-3.089-52.82 5.275-72.678 25.117-15.127 15.152-23.573 34.473-25.361 54.258a89.768 89.768 0 001.097 24.004L16.965 288.84c-9.746 9.754-15.127 22.703-15.127 36.497 0 13.762 5.381 26.694 15.103 36.432 20.11 20.102 52.819 20.102 72.962 0 0 0 132.683-132.666 186.413-186.461a87.007 87.007 0 0025.41-.26c17.769-2.78 34.847-10.925 48.56-24.613 18.866-18.867 27.328-44.139 25.442-68.784zM70.857 345.91c-10.551 10.494-27.523 10.494-38.042-.024-10.47-10.445-10.494-27.499.024-37.969 10.494-10.47 27.466-10.445 37.985 0 10.471 10.47 10.471 27.524.033 37.993z"/></svg>
                
                <h2>Tools</h2>
                <p className="skills">
                  Git, Linux, VS Code, ExpoCLI, MATLAB, Terminal, Microsoft
                  Office Suite
                </p>
              </div>

            </div>
            <div className="skills-skill">
              <div id="soft-skills" className="individual-skill">
                <svg id="soft-skills-icon" className="skill-graphic" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m316 306c0-33.084-26.916-60-60-60s-60 26.916-60 60 26.916 60 60 60 60-26.916 60-60zm-60 40c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"/><path d="m152 306c0-33.084-26.916-60-60-60s-60 26.916-60 60 26.916 60 60 60 60-26.916 60-60zm-60 40c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"/><path d="m480 306c0-33.084-26.916-60-60-60s-60 26.916-60 60 26.916 60 60 60 60-26.916 60-60zm-60 40c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"/><path d="m420 366c-35.894 0-66.923 20.77-82 49.47-15.038-28.626-45.99-49.47-82-49.47-35.894 0-66.923 20.77-82 49.47-15.038-28.626-45.99-49.47-82-49.47-49.854 0-92 40.334-92 90v46c0 5.522 4.478 10 10 10h492c5.522 0 10-4.478 10-10v-46c0-49.662-42.143-90-92-90zm-164 20c39.028 0 72 32.056 72 70v36h-144v-36c0-37.944 32.972-70 72-70zm-236 70c0-37.944 32.972-70 72-70s72 32.056 72 70v36h-144zm472 36h-144v-36c0-37.944 32.972-70 72-70s72 32.056 72 70z"/><path d="m256 60c-16.542 0-30 13.458-30 30s13.458 30 30 30 30-13.458 30-30-13.458-30-30-30zm0 40c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z"/><path d="m146 90c0 16.542 13.458 30 30 30s30-13.458 30-30-13.458-30-30-30-30 13.458-30 30zm40 0c0 5.514-4.486 10-10 10s-10-4.486-10-10 4.486-10 10-10 10 4.486 10 10z"/><path d="m366 90c0-16.542-13.458-30-30-30s-30 13.458-30 30 13.458 30 30 30 30-13.458 30-30zm-40 0c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10-10-4.486-10-10z"/><circle cx="256" cy="10" r="10"/><path d="m266.829 166.013-10.829 24.907-10.829-24.907c-1.588-3.652-5.19-6.013-9.171-6.013h-100c-38.599 0-70-31.401-70-70s31.401-70 70-70h75c5.522 0 10-4.478 10-10s-4.478-10-10-10h-75c-49.626 0-90 40.374-90 90s40.374 90 90 90h93.443l17.386 39.987c1.588 3.651 5.189 6.013 9.171 6.013s7.583-2.361 9.171-6.013l17.386-39.987h93.443c49.626 0 90-40.374 90-90s-40.374-90-90-90h-75c-5.522 0-10 4.478-10 10s4.478 10 10 10h75c38.599 0 70 31.401 70 70s-31.401 70-70 70h-100c-3.981 0-7.583 2.361-9.171 6.013z"/></g></svg>
                
                <h2> Soft Skills </h2>
                <p className="skills">
                  Strong Communication, Confidence, Problem Solving,
                  Performing Under Pressure
                </p>
              </div>

              <div id="leadership" className="individual-skill">
                <svg id="leadership-icon" className="skill-graphic" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_2123_"><g id="XMLID_197_"><path id="XMLID_606_" d="m443.129 340.017c6.53-8.539 10.42-19.199 10.42-30.754v-17.713c0-27.977-22.761-50.737-50.737-50.737s-50.737 22.761-50.737 50.737v17.713c0 11.548 3.885 22.201 10.407 30.737h-56.761c13.713-13.117 22.279-31.571 22.279-52v-46.05c0-39.701-32.299-72-72-72s-72 32.299-72 72v46.05c0 20.429 8.566 38.883 22.278 52h-56.761c6.522-8.537 10.407-19.19 10.407-30.737v-17.713c0-27.977-22.761-50.737-50.737-50.737s-50.737 22.76-50.737 50.737v17.713c0 11.556 3.891 22.215 10.42 30.754-38.036.366-68.87 31.408-68.87 69.529v37.87c0 5.522 4.478 10 10 10h80v44.584c0 5.522 4.478 10 10 10h28.001c5.522 0 10-4.478 10-10s-4.478-10-10-10h-18.001v-48.72c0-43.706 33.85-79.63 76.706-82.997l54.35 131.717h-23.061c-5.522 0-10 4.478-10 10s4.478 10 10 10h194.005c5.522 0 10-4.478 10-10v-44.584h80c5.522 0 10-4.478 10-10v-37.87c0-38.121-30.834-69.163-68.871-69.529zm-71.054-30.754v-17.713c0-16.948 13.789-30.737 30.737-30.737s30.737 13.789 30.737 30.737v17.713c0 16.948-13.789 30.737-30.737 30.737s-30.737-13.789-30.737-30.737zm-116.075-119.313c28.673 0 52 23.327 52 52v.1h-.043c-16.55 0-32.622-4.794-46.481-13.862-3.326-2.178-7.625-2.178-10.951 0-13.859 9.068-29.932 13.862-46.481 13.862h-.044v-.1c0-28.673 23.327-52 52-52zm-52 98.05v-25.95h.043c18.306 0 36.137-4.745 51.957-13.776 15.82 9.031 33.651 13.776 51.957 13.776h.043v25.95c0 28.673-23.327 52-52 52s-52-23.327-52-52zm-125.55 3.55c0-16.948 13.789-30.737 30.737-30.737s30.737 13.789 30.737 30.737v17.713c0 16.948-13.789 30.737-30.737 30.737s-30.737-13.789-30.737-30.737zm11.72 145.866h-70.17v-27.87c0-27.319 22.227-49.546 49.546-49.546h62.726c-24.136 17.729-40.316 45.679-42.102 77.416zm118.205-77.416h37.625v24c0 5.522 4.478 10 10 10s10-4.478 10-10v-24h37.625.15l-47.775 115.783-47.775-115.783zm193.625 132h-131.056l54.35-131.716c42.856 3.366 76.706 39.29 76.706 82.996zm90-54.584h-70.17c-1.786-31.737-17.966-59.687-42.102-77.416h62.726c27.319 0 49.546 22.227 49.546 49.546z"/><path id="XMLID_619_" d="m187.303 77.045 23.87 17.264-9.13 27.892c-2.703 8.259.093 16.896 7.124 22.004 7.03 5.108 16.109 5.099 23.128-.025l23.705-17.303 23.705 17.302c3.516 2.566 7.547 3.85 11.581 3.85 4.018 0 8.038-1.275 11.547-3.824 7.031-5.107 9.827-13.745 7.124-22.005l-9.13-27.891 23.87-17.264c7.034-5.087 9.852-13.711 7.178-21.97-2.674-8.258-10.01-13.594-18.689-13.594h-29.48l-9.012-27.879c-2.673-8.263-10.009-13.602-18.694-13.602s-16.021 5.339-18.693 13.603l-9.012 27.879h-29.48c-8.68 0-16.016 5.336-18.689 13.594-2.675 8.258.143 16.882 7.177 21.969zm48.269-15.564c4.338 0 8.181-2.797 9.516-6.924l10.914-33.755 10.91 33.755c1.335 4.127 5.178 6.924 9.516 6.924l35.657.003-28.893 20.895c-3.523 2.549-4.996 7.082-3.644 11.215l11.054 33.778-28.707-20.953c-1.756-1.282-3.826-1.923-5.896-1.923s-4.14.641-5.896 1.923l-28.71 20.952 11.057-33.777c1.353-4.133-.12-8.666-3.644-11.215l-28.892-20.897h35.658z"/><path id="XMLID_620_" d="m173 492c-2.63 0-5.21 1.069-7.07 2.93s-2.93 4.44-2.93 7.07 1.069 5.21 2.93 7.069c1.86 1.86 4.44 2.931 7.07 2.931s5.21-1.07 7.069-2.931c1.861-1.859 2.931-4.439 2.931-7.069s-1.07-5.21-2.931-7.07c-1.859-1.861-4.439-2.93-7.069-2.93z"/></g></g></svg>              
                
                <h2>Leadership</h2>
                <p className="skills">
                  Team and Task Oriented, Ambitious, Organized
                </p>
              </div>

              <div id="optimization" className="individual-skill">
                <svg id="optimization-icon" className="skill-graphic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M410.34277,18.34277,388.68555,40H360a8.00039,8.00039,0,0,0-8,8V76.68555L324.68555,104H296a8.00039,8.00039,0,0,0-8,8v28.68555L260.68555,168H232a8.00039,8.00039,0,0,0-8,8v28.68555L188.68652,240H161.33423a95.64587,95.64587,0,0,1,42.97925-64.91309l-8.627-13.47461A112.00943,112.00943,0,0,0,256,368H358.75293A152.11931,152.11931,0,0,1,256,408c-83.81348,0-152-68.18652-152-152H88a167.79394,167.79394,0,0,0,4.82446,40H32V216H96a8,8,0,0,0,7.39062-4.93848l12.92188-31.19629a8.00028,8.00028,0,0,0-1.7334-8.71875l-45.25586-45.2539,56.56934-56.56934,45.2539,45.25586a7.99745,7.99745,0,0,0,8.71875,1.7334l31.19629-12.92188A8,8,0,0,0,216,96V32h80V80h16V24a8.00039,8.00039,0,0,0-8-8H208a8.00039,8.00039,0,0,0-8,8V90.6543l-21.31934,8.831L131.5498,52.35254a8.0018,8.0018,0,0,0-11.31445,0L52.35254,120.23535a8.0018,8.0018,0,0,0,0,11.31445l47.13281,47.13086L90.6543,200H24a8.00039,8.00039,0,0,0-8,8v96a8.00039,8.00039,0,0,0,8,8H90.6543l8.831,21.31934L52.35254,380.4502a8.0018,8.0018,0,0,0,0,11.31445l67.88281,67.88281a8.0018,8.0018,0,0,0,11.31445,0l47.13086-47.13281L200,421.3457V488a8.00039,8.00039,0,0,0,8,8h96a8.00039,8.00039,0,0,0,8-8V421.3457l21.31934-8.83105,47.13086,47.13281a8.0018,8.0018,0,0,0,11.31445,0l67.88281-67.88281a8.00062,8.00062,0,0,0-.001-11.31445L447.19629,368H488a8.00039,8.00039,0,0,0,8-8V88a8.00039,8.00039,0,0,0-8-8H424a8.00039,8.00039,0,0,0-8,8v56H360a8.00039,8.00039,0,0,0-8,8v40H296a8.00039,8.00039,0,0,0-8,8v48H232a8.00039,8.00039,0,0,0-8,8v32H165.491A95.5652,95.5652,0,0,1,160,256h32a8.00235,8.00235,0,0,0,5.65723-2.34277L235.31445,216H264a8.00039,8.00039,0,0,0,8-8V179.31445L299.31445,152H328a8.00039,8.00039,0,0,0,8-8V115.31445L363.31445,88H392a8.00039,8.00039,0,0,0,8-8V51.31445L419.31348,32H496V16H416A8.00235,8.00235,0,0,0,410.34277,18.34277Zm-284.45019,424.334L69.32324,386.10742l43.04395-43.042a169.30277,169.30277,0,0,0,56.56738,56.56738ZM216,480V419.17554a167.97791,167.97791,0,0,0,80-.01514V480Zm226.67676-93.89258-56.56934,56.56934-43.032-43.03369A168.05664,168.05664,0,0,0,381.20654,368h43.36182ZM432,96h48V352H432V96Zm-64,64h48V352H368V160Zm-64,48h48V352H304V208Zm-64,56h48v88H256a96.21362,96.21362,0,0,1-16-1.34082V264Zm-16,40v42.509A96.52,96.52,0,0,1,172.887,304Zm32-104H240V184h16Zm64-64H304V120h16Zm64-64H368V56h16Z"/></svg>

                <h2>Optimization</h2>
                <p className="skills">
                  Agile and Waterfall Development, Design Thinking, Root Cause Analysis, Modeling
                </p>
              </div>

            </div>
          </div>
        </div>
      </a>
    )
  }
}

export default Skills;