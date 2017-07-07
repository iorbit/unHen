$(document).ready(function() {
     unHen()
     unHenTogggle()
})

function unHen() {
     var $allHen =
          $("p, span, h1, h2, h3, h4 ,h5, h6, b, strong, i, li")
          .filter(':contains(hen), :contains(Hen), :contains(HEN)')

     $allHen.html(function(i,string) {
          var spanVisible = '<span class="extension_inget_hen">'
          var spanInvisible = '<span class="extension_inget_hen" style="display:none;">'
          var spanEnd = '</span>'
          
		  return string.replace(
               /\bhen([s]?)\b/ig,
               function(match, p1) {
                    var replacement = match.startsWith('H') ? 'Vederbörande' : 'vederbörande';
                    return spanInvisible + replacement + p1 + spanEnd + spanVisible + match + spanEnd
               }
          )
     })
}

function unHenTogggle() {
     $('span.extension_inget_hen').toggle()
}
