import React, {Component} from 'react';

class PhotoGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [
                {
                    id: 1,
                    url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAG1BMVEXZ2dn////w8PDn5+fd3d3s7Oz19fX6+vri4uKaQMPJAAACCUlEQVR4nO3X23KEIBRE0XDn/784JINyEY5W5IFU7fU00xVpUSTO1xcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/BPWvgr3KDE6qCTo5uion4ablJiQjnHGOK+UKbFOqTEmjeluwl1KvI75UwwqnqnSnw/Wl/GG4TYl1Q20KuRP7hgtCcoK4UYlFX1crRBKaJUXwj1LTL6Zpl7I6WbbabhpScwduhkgDz4MT12jcAIvSh47Our7+3OH9TQ8v4bmwTTliV5Y8ly+Av3xwc/CQtdbjJEW94uSx/KajN2+59UsrFQzEefxquShY5eI3dLUaha2QT4JeR7vSp45Nsb+Gfsdbhh2ifscLa6HlyVPxGOBXoezk7A/R3c7j9cl92wI9mVHmsnNPBaU3PLnlvn35Zve9OR9ZkXJDV3G+PuGYpS88y8pkdX/By67eZiFnbSutPTKuqRE1vZ36+Mz+jBs/D4fwkyWlMh0e0R7R/Nb3jBsI3893dUlsr673Tz06MX0up+c+9VkJktKZJefYs0PgePLMKzP60yGM1lSIko/KS8vy65qPXfMYXho/n9cZ7KmRGTD6M/D2Vut7GGYR2kvnu7GXFMiShXaFabE3kQbXahGG4aZkb6uKpFE1SjX1YVP0JzSMNykZM7GdGUehbuXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJVvsVwNXG8DVTkAAAAASUVORK5CYII=',
                    name: 'Sample 1'
                },
                {
                    id: 2,
                    url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAG1BMVEXZ2dn////w8PDn5+fd3d3s7Oz19fX6+vri4uKaQMPJAAACCUlEQVR4nO3X23KEIBRE0XDn/784JINyEY5W5IFU7fU00xVpUSTO1xcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/BPWvgr3KDE6qCTo5uion4ablJiQjnHGOK+UKbFOqTEmjeluwl1KvI75UwwqnqnSnw/Wl/GG4TYl1Q20KuRP7hgtCcoK4UYlFX1crRBKaJUXwj1LTL6Zpl7I6WbbabhpScwduhkgDz4MT12jcAIvSh47Our7+3OH9TQ8v4bmwTTliV5Y8ly+Av3xwc/CQtdbjJEW94uSx/KajN2+59UsrFQzEefxquShY5eI3dLUaha2QT4JeR7vSp45Nsb+Gfsdbhh2ifscLa6HlyVPxGOBXoezk7A/R3c7j9cl92wI9mVHmsnNPBaU3PLnlvn35Zve9OR9ZkXJDV3G+PuGYpS88y8pkdX/By67eZiFnbSutPTKuqRE1vZ36+Mz+jBs/D4fwkyWlMh0e0R7R/Nb3jBsI3893dUlsr673Tz06MX0up+c+9VkJktKZJefYs0PgePLMKzP60yGM1lSIko/KS8vy65qPXfMYXho/n9cZ7KmRGTD6M/D2Vut7GGYR2kvnu7GXFMiShXaFabE3kQbXahGG4aZkb6uKpFE1SjX1YVP0JzSMNykZM7GdGUehbuXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJVvsVwNXG8DVTkAAAAASUVORK5CYII=',
                    name: 'Sample 2'
                },
                {
                    id: 3,
                    url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAG1BMVEXZ2dn////w8PDn5+fd3d3s7Oz19fX6+vri4uKaQMPJAAACCUlEQVR4nO3X23KEIBRE0XDn/784JINyEY5W5IFU7fU00xVpUSTO1xcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/BPWvgr3KDE6qCTo5uion4ablJiQjnHGOK+UKbFOqTEmjeluwl1KvI75UwwqnqnSnw/Wl/GG4TYl1Q20KuRP7hgtCcoK4UYlFX1crRBKaJUXwj1LTL6Zpl7I6WbbabhpScwduhkgDz4MT12jcAIvSh47Our7+3OH9TQ8v4bmwTTliV5Y8ly+Av3xwc/CQtdbjJEW94uSx/KajN2+59UsrFQzEefxquShY5eI3dLUaha2QT4JeR7vSp45Nsb+Gfsdbhh2ifscLa6HlyVPxGOBXoezk7A/R3c7j9cl92wI9mVHmsnNPBaU3PLnlvn35Zve9OR9ZkXJDV3G+PuGYpS88y8pkdX/By67eZiFnbSutPTKuqRE1vZ36+Mz+jBs/D4fwkyWlMh0e0R7R/Nb3jBsI3893dUlsr673Tz06MX0up+c+9VkJktKZJefYs0PgePLMKzP60yGM1lSIko/KS8vy65qPXfMYXho/n9cZ7KmRGTD6M/D2Vut7GGYR2kvnu7GXFMiShXaFabE3kQbXahGG4aZkb6uKpFE1SjX1YVP0JzSMNykZM7GdGUehbuXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJVvsVwNXG8DVTkAAAAASUVORK5CYII=',
                    name: 'Sample 3'
                },
                {
                    id: 4,
                    url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAG1BMVEXZ2dn////w8PDn5+fd3d3s7Oz19fX6+vri4uKaQMPJAAACCUlEQVR4nO3X23KEIBRE0XDn/784JINyEY5W5IFU7fU00xVpUSTO1xcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/BPWvgr3KDE6qCTo5uion4ablJiQjnHGOK+UKbFOqTEmjeluwl1KvI75UwwqnqnSnw/Wl/GG4TYl1Q20KuRP7hgtCcoK4UYlFX1crRBKaJUXwj1LTL6Zpl7I6WbbabhpScwduhkgDz4MT12jcAIvSh47Our7+3OH9TQ8v4bmwTTliV5Y8ly+Av3xwc/CQtdbjJEW94uSx/KajN2+59UsrFQzEefxquShY5eI3dLUaha2QT4JeR7vSp45Nsb+Gfsdbhh2ifscLa6HlyVPxGOBXoezk7A/R3c7j9cl92wI9mVHmsnNPBaU3PLnlvn35Zve9OR9ZkXJDV3G+PuGYpS88y8pkdX/By67eZiFnbSutPTKuqRE1vZ36+Mz+jBs/D4fwkyWlMh0e0R7R/Nb3jBsI3893dUlsr673Tz06MX0up+c+9VkJktKZJefYs0PgePLMKzP60yGM1lSIko/KS8vy65qPXfMYXho/n9cZ7KmRGTD6M/D2Vut7GGYR2kvnu7GXFMiShXaFabE3kQbXahGG4aZkb6uKpFE1SjX1YVP0JzSMNykZM7GdGUehbuXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJVvsVwNXG8DVTkAAAAASUVORK5CYII=',
                    name: 'Sample 4'
                },
                {
                    id: 5,
                    url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAG1BMVEXZ2dn////w8PDn5+fd3d3s7Oz19fX6+vri4uKaQMPJAAACCUlEQVR4nO3X23KEIBRE0XDn/784JINyEY5W5IFU7fU00xVpUSTO1xcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/BPWvgr3KDE6qCTo5uion4ablJiQjnHGOK+UKbFOqTEmjeluwl1KvI75UwwqnqnSnw/Wl/GG4TYl1Q20KuRP7hgtCcoK4UYlFX1crRBKaJUXwj1LTL6Zpl7I6WbbabhpScwduhkgDz4MT12jcAIvSh47Our7+3OH9TQ8v4bmwTTliV5Y8ly+Av3xwc/CQtdbjJEW94uSx/KajN2+59UsrFQzEefxquShY5eI3dLUaha2QT4JeR7vSp45Nsb+Gfsdbhh2ifscLa6HlyVPxGOBXoezk7A/R3c7j9cl92wI9mVHmsnNPBaU3PLnlvn35Zve9OR9ZkXJDV3G+PuGYpS88y8pkdX/By67eZiFnbSutPTKuqRE1vZ36+Mz+jBs/D4fwkyWlMh0e0R7R/Nb3jBsI3893dUlsr673Tz06MX0up+c+9VkJktKZJefYs0PgePLMKzP60yGM1lSIko/KS8vy65qPXfMYXho/n9cZ7KmRGTD6M/D2Vut7GGYR2kvnu7GXFMiShXaFabE3kQbXahGG4aZkb6uKpFE1SjX1YVP0JzSMNykZM7GdGUehbuXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJVvsVwNXG8DVTkAAAAASUVORK5CYII=',
                    name: 'Sample 5'
                },
                {
                    id: 6,
                    url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAG1BMVEXZ2dn////w8PDn5+fd3d3s7Oz19fX6+vri4uKaQMPJAAACCUlEQVR4nO3X23KEIBRE0XDn/784JINyEY5W5IFU7fU00xVpUSTO1xcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/BPWvgr3KDE6qCTo5uion4ablJiQjnHGOK+UKbFOqTEmjeluwl1KvI75UwwqnqnSnw/Wl/GG4TYl1Q20KuRP7hgtCcoK4UYlFX1crRBKaJUXwj1LTL6Zpl7I6WbbabhpScwduhkgDz4MT12jcAIvSh47Our7+3OH9TQ8v4bmwTTliV5Y8ly+Av3xwc/CQtdbjJEW94uSx/KajN2+59UsrFQzEefxquShY5eI3dLUaha2QT4JeR7vSp45Nsb+Gfsdbhh2ifscLa6HlyVPxGOBXoezk7A/R3c7j9cl92wI9mVHmsnNPBaU3PLnlvn35Zve9OR9ZkXJDV3G+PuGYpS88y8pkdX/By67eZiFnbSutPTKuqRE1vZ36+Mz+jBs/D4fwkyWlMh0e0R7R/Nb3jBsI3893dUlsr673Tz06MX0up+c+9VkJktKZJefYs0PgePLMKzP60yGM1lSIko/KS8vy65qPXfMYXho/n9cZ7KmRGTD6M/D2Vut7GGYR2kvnu7GXFMiShXaFabE3kQbXahGG4aZkb6uKpFE1SjX1YVP0JzSMNykZM7GdGUehbuXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJVvsVwNXG8DVTkAAAAASUVORK5CYII=',
                    name: 'Sample 6'
                },
                {
                    id: 7,
                    url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAG1BMVEXZ2dn////w8PDn5+fd3d3s7Oz19fX6+vri4uKaQMPJAAACCUlEQVR4nO3X23KEIBRE0XDn/784JINyEY5W5IFU7fU00xVpUSTO1xcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/BPWvgr3KDE6qCTo5uion4ablJiQjnHGOK+UKbFOqTEmjeluwl1KvI75UwwqnqnSnw/Wl/GG4TYl1Q20KuRP7hgtCcoK4UYlFX1crRBKaJUXwj1LTL6Zpl7I6WbbabhpScwduhkgDz4MT12jcAIvSh47Our7+3OH9TQ8v4bmwTTliV5Y8ly+Av3xwc/CQtdbjJEW94uSx/KajN2+59UsrFQzEefxquShY5eI3dLUaha2QT4JeR7vSp45Nsb+Gfsdbhh2ifscLa6HlyVPxGOBXoezk7A/R3c7j9cl92wI9mVHmsnNPBaU3PLnlvn35Zve9OR9ZkXJDV3G+PuGYpS88y8pkdX/By67eZiFnbSutPTKuqRE1vZ36+Mz+jBs/D4fwkyWlMh0e0R7R/Nb3jBsI3893dUlsr673Tz06MX0up+c+9VkJktKZJefYs0PgePLMKzP60yGM1lSIko/KS8vy65qPXfMYXho/n9cZ7KmRGTD6M/D2Vut7GGYR2kvnu7GXFMiShXaFabE3kQbXahGG4aZkb6uKpFE1SjX1YVP0JzSMNykZM7GdGUehbuXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJVvsVwNXG8DVTkAAAAASUVORK5CYII=',
                    name: 'Sample 7'
                }
            ]
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.photos.map(photo => <div key={photo.id} className="col-2">
                                <img src={photo.url}
                                     className="rounded float-left instagram-photo"
                                     alt={photo.name}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoGallery;
