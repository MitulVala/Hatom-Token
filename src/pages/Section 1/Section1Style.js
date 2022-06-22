const styles = theme => ({

    roundImage: {
        position: 'absolute',
        top: '-34%',
        left: '-3%',
    },

    container: {
        height: '100vh',
        position: 'relative',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        justifyContent: 'center',
        backgroundColor: '#ebf4ff',
        // backgroundImage: 'url("/images/banner-background.svg")',
        overflow: 'hidden',
    },

    mainBanner: {
        position: 'absolute',
        bottom: 0,
        right: '-7%'
    },

    '@media(min - width: 1200px) and(max - width: 1600px)': {
        mainBanner: {
            right: '-9%',
        },
        roundImage: {
            left: '-4%',
            top: '-39%',
        }
    },

    title: {
        fontFamily: 'CeraPro-Black',
        fontSize: '72px',
        fontWeight: '900',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.18',
        letterSpacing: '-2px',
        color: '#0a0d4a',
        maxWidth: '467px',
},
    content: {
        width: '100%',
        textAlign: 'start',
        paddingLeft: '15%',
    },

    subTitle: {
        fontFamily: 'CeraPro-Regular',
        fontSize: '24px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.42,
        letterSpacing: 'normal',
        color: '#8086a2',
        maxWidth: '370px',
        margin: '25px 0',
    },

    discoverButton: {
        fontFamily: 'CeraPro-Bold',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#ffffff',
        margin: '0 36px 0 0',
        padding: '10px 12px 16px 14px',
        borderRadius: '5px',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 2px 6px 0 rgba(0, 0, 0, 0.04)',
    },

    signupButton: {
        fontFamily: 'CeraPro-Bold',
        fontSize: '16px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#0a0d4a',
        borderBottom: '1px solid #0a0d4a',
        cursor: 'pointer',
    },

'@media(max - width: 599px)': {
    content: {
        textAlign: 'center',
            paddingLeft: 0,
                paddingTop: '15%',
        },

    title: {
        maxWidth: '100%',
            fontSize: '52px',
        },

    subTitle: {
        maxWidth: '100%',
            fontSize: '22px',
        },

    container: {
        padding: '0 5px',
        },

    roundImage: {
        top: '-60%',
            left: '-10%',
        }
}
});
export default styles