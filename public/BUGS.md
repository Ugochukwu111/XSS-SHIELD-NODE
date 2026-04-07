# 1: sidebar bug
     The sidebar works correctly on both mobile and desktop views
## The Problem
    when on laptop , when resizing to mobile side bar hides due to css in media query kicking in, which is as expected . still in the resize version when you toggle side bar to be false (closed) and decide to resize when it gets to desktop view the side bar is still closed and not visible on the desktop screen  over riding the desktop css.

## CAUSE
     because the side bar is clicked to close before resizing an inline 
     styling script runs which over rides the desktop views default styles to show the side bar

## FIX
     use Js class list instead of inline js styles