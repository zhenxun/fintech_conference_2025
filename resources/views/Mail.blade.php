@component('mail::message')
    <div>
        <p style="font-size: 12pt">{!!$data['name']!!}</p>
        <p style="font-size: 12pt">{!!$data['message1']!!}</p>
        <p style="font-size: 12pt">{!!$data['message2']!!}</p>
    </div>
    <div>
        <p style="font-size: 12pt">{!!$data['Paper_ID']!!}</p>
        <p style="font-size: 12pt">{!!$data['Title']!!}</p>
        <p style="font-size: 12pt">{!!$data['Corresponding_Author']!!}</p>
        <p style="font-size: 12pt">{!!$data['State']!!}</p>
    </div>
    <div>
        <p style="font-size: 12pt">{!!$data['message3']!!}</p>
    </div>
    @if ($data['link']!=null)
        @component('mail::button', ['url' => $data['link']])
            {{$data['button']}}
        @endcomponent
    @endif
    <div>
        <p style="font-size: 12pt">{!!$data['message4']!!}</p>
    </div>
    @isset($data['message5'])
    <div>
        <p style="font-size: 12pt">{!!$data['message5']!!}</p>
    </div>
    @endisset
<br>
<br>
<div style="font-size:14pt">
Kind regards,<br>
@env('APP_NAME')@endenv Organizing Committee
</div>
@endcomponent