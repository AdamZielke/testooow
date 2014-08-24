Film = new Meteor.Collection('Film');

if (Meteor.isClient)
{
  Template.main.Film = function()
  {
    return Film.find();
  }

  Template.main.events({
    'click input.btn' : function ()
    {
      var Kod = $('#Kod').val();
      if(Kod.length==11)
      {
        Film.insert({Kod:Kod});
        $('#Kod').val("");
        alert("Film dodany poprawnie ponizej :)");
      }
      else
      {
        alert("Podales zly kod, sprobuj jeszcze raz :)");
      }
    }
  });
}

if (Meteor.isServer) {
  
}