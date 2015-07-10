export default function() {

  var duration = 500;

  this.transition(
    this.fromRoute('index'),
    this.toRoute('meetups'),
    this.use('fade')
  );

  this.transition(
    this.fromRoute('meetups.index'),
    this.toRoute('meetups.meetup'),
    this.use('toRight', { duration: duration }),
    this.reverse('toLeft', { duration: duration })
  );
}
