import {COLORS} from './Couleurs';

export const STYLESMENU = {
  containerMenu: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 15,
  },
  containerUserIcon: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  userIcon: {
    width: 60,
    height: 60,
  },
  lienVersProfil: {
    color: 'white',
    marginLeft: 15,
  },
  nameUser: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  containerLink: {
    marginTop: 15,
  },
  lienNav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    height: 55,
    width: 200,
    marginTop: 20,
  },
  textLink: {
    marginLeft: 10,
    color: COLORS.mauveClaire,
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerLinkDeconnexion: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 80,
    marginTop: 60,
  },
  textDeconnexion: {
    color: 'white',
  },
};
