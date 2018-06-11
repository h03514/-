(function() {
    $(document).ready(function() {
        let $todo = $('.todo_List');
        let $todo_Detail = $('.todo_Detail');
        $todo.on('click', function() {
            $todo.fadeOut();
            $todo_Detail.fadeIn();
        });

        let $save = $('.clickBtn .save');
        $save.on('click', function(e) {
            e.preventDefault();
            let $comment = $('.comment').val();
            localStorage.setItem('content', $comment);
        });


    });

})()