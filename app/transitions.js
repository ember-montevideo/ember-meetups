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

  this.transition(
    this.hasClass('favorite'),

    // this makes our rule apply when the liquid-if transitions to the
    // true state.
    this.toValue(true),
    this.use('crossFade', { duration }),

    // which means we can also apply a reverse rule for transitions to
    // the false state.
    this.reverse('crossFade', { duration })
  );
}
