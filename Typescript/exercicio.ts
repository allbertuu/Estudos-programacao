let spaceship = {
  name: '',
  captain: '',
  speed: 20,
  crew: [],
  isSent: false,
}

function sendSpaceship() {
  spaceship.isSent = true;
  alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão.`);
}

function accelerateSpaceship(targetSpeed: number) {
  if (spaceship.speed > targetSpeed) {
    alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`)
  } else if (spaceship.speed < targetSpeed) {
    alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}...`)
  }
  else {
    alert(`Mantendo a velocidade da ${spaceship.name}...`)
  }
}

function getSpaceshipName():string {
  let spaceshipName = prompt('Insira o nome da nave a ser enviada.', 'Nave');
  if (typeof spaceshipName !== 'string') {
    return 'SEM NOME';
  }
  return spaceshipName;
}

function getSpaceshipCaptain():string {
  let spaceshipCaptain = prompt('Insira o nome do capitão da nave.', 'Capitão');
  if (typeof spaceshipCaptain !== 'string') {
    return 'SEM CAPITÃO';
  }
  return spaceshipCaptain;
}

export function startMission() {
  // eslint-disable-next-line no-restricted-globals
  const isReady = confirm('Você aceita iniciar a missão?');
  if (isReady) {
    spaceship.name = getSpaceshipName();
    spaceship.captain = getSpaceshipCaptain();

    sendSpaceship()

    const speed = Number(prompt('Insira quanto você quer acelerar:'));
    accelerateSpaceship(speed)
  }
  else {
    alert('Que pena :(');
  }
}